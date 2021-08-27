export default {
    getNextId(array) {
        //if (!array && typeof array != 'object') return;
        let id = array[array.length - 1].id;
        !!id ? id++ : id = 1;
        return id;
    }
}