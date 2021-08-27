import { useHistory } from "react-router-dom";

export default {
    getNextId(array = []) {
        if (!(array[array.length - 1])) return 1;
        let id = array[array.length - 1].id;
        id++
        return id;
    }
}