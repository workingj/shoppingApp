import axios from "axios";
const VITE_APP_API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

export const createItem = async (item) => {
    axios
        .post(`${VITE_APP_API_BASE_URL}/entries`, { item: item.item })
        .then(
            (res) => {
                console.log("POST", res.data.item, res.data.checked);
            }
        ).catch(function (error) {
            console.error(error.stack);
        });
};

export const updateItem = async (item) => {
    axios
        .put(`${VITE_APP_API_BASE_URL}/entries/${item.id}`, { item: item.item, checked: item.checked })
        .then(function (res) {
            console.log("PUT", res.data.item, res.data.checked);
        })
        .catch(function (error) {
            console.log(error.stack);
        });
};

export const deleteItem = async (id) => {
    axios
        .delete(`${VITE_APP_API_BASE_URL}/entries/${id}`)
        .then(function (res) {
            console.log("DELETE", res.data.item, res.data.checked);
        })
        .catch(function (error) {
            console.log(error.stack);
        });
};