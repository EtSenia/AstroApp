import { useEffect, useState } from "preact/hooks";
import { state } from "../services/prueba";

export default function Number() {
    const [number, setNumber] = useState(state.getState());

    useEffect(() => {
        const subscription = state.subscribe((state) => {
            setNumber(state);
        });

        return () => {
            subscription.unsubscribe();
        };
    },   []);
    
    return (
        <div class="flex h-svh justify-center items-center">
            <h1 class="rainbow-text text-5xl font-bold w-full text-center text-white ">
                {number}
            </h1>
        </div>
    );
}