import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

    export function Error( string) {
        toast.error(string, {theme:localStorage.theme,
        position: "bottom-right"});
    }

    export function Warning( string) {
        toast.warning(string, {theme:localStorage.theme,
        position: "bottom-right"});
    }

    export function Success( string) {
        toast.success(string, {theme:localStorage.theme,
        position: "bottom-right"});
    }


// <ToastContainer transition={bounce} />