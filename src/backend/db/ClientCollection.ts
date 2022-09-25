import {
    collection,
    deleteDoc,
    doc,
    getDocs,
    getFirestore,
    QueryDocumentSnapshot,
    setDoc,
    SnapshotOptions,
    updateDoc,
} from "firebase/firestore"
import Cliente from "../../core/Cliente"
import { app } from "../config"

import { IClientRepository } from "./../../core/IClientRepository"

export default class ClientCollection implements IClientRepository {
    private converter = {
        toFirestore(client: Cliente) {
            return {
                nome: client.getNome(),
                idade: client.getIdade(),
            }
        },
        fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Cliente {
            const data = snapshot?.data(options)
            return new Cliente(data?.nome, data?.idade, snapshot?.id)
        },
    }

    async saveOrUpdate(client: Cliente): Promise<Cliente | undefined> {
        if (client.getId()) {
            const db = getFirestore(app)
            const docRef = doc(db, "clientes", client.getId() ?? "")
            await updateDoc(docRef, {
                id: client.getId(),
                nome: client.getNome(),
                idade: client.getIdade(),
            })
            return client
        }

        await setDoc(doc(this.collection()), client)
        return client
    }

    async delete(client: Cliente): Promise<void> {
        const clienteSnapshot = await getDocs(this.collection())

        const clientDoc = clienteSnapshot.docs.find((c) => c.data().getId() === client.getId())

        if (clientDoc) {
            await deleteDoc(clientDoc.ref)
        }
    }

    async getAll(): Promise<Cliente[]> {
        const querySnapshot = await getDocs(this.collection())
        return querySnapshot.docs.map((doc) => doc.data())
    }

    private collection() {
        const db = getFirestore(app)
        return collection(db, "clientes").withConverter(this.converter)
    }
}
