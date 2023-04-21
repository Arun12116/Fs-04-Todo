import React from 'react'
import { useState } from "react"

const Todo = () => {
    const [change, setChange] = useState("");
    const [storeData, setStoreData] = useState([]);
    console.log(storeData);
    const changelHandler = () => {
        setStoreData((previousDAta) => {
            return [...previousDAta, change]
        })
        setChange("");

    }

    const deleteHandle = (i) => {
        const originalData = storeData.filter((elem, id) => {
            return i !== id;
        })
        setStoreData(originalData)

    }
    return (
        <>

            <div className="todo-Container">
                <div className="todo-Body">
                    <input type="text" placeholder='Enter Any Things' value={change} onChange={(e) => { setChange(e.target.value) }} />

                    <button onClick={changelHandler}>Click</button>



                    {storeData !==[] && storeData.map((items, indx) => {
                        return (
                            <>

                                <div className="data">

                                    <div className="list">


                                        {items}
                                        <div className="btn">
                                            <button onClick={() => deleteHandle(indx)}>delete</button>

                                        </div>


                                    </div>

                                </div>
                            </>

                        )





                    })
                    }


                </div>

            </div>


        </>
    )
}

export default Todo