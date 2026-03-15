 import { ToastContainer, toast } from 'react-toastify';

const getStoredBook = ()=>{
    const storedBookAsSTR = localStorage.getItem('readList')
    if(storedBookAsSTR){
        const storedBookData = JSON.parse(storedBookAsSTR)
        return storedBookData;
    }
    else{
        return [];
    }
}

const addToStoredDB = (id) =>{
    const storedBookData = getStoredBook()
    if(storedBookData.includes(id)){
        toast("Book is already added");
        
    }
    else{
        storedBookData.push(id)
        const data = JSON.stringify(storedBookData)
        localStorage.setItem('readList',data)

    }
}

export {addToStoredDB, getStoredBook};