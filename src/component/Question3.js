import React, { useState, useEffect } from 'react'
import './question3.css'


const Question3 = () => {

    const [inputFields, setInputFields] = useState([
        { id: Math.random(), todo: '' }
    ])

    const [list, setList] = useState([])
    // console.log("list:>>", list)
    const handleChange = (e, ind) => {
        // console.log("dasdasda",e,ind)
        const values = [...inputFields];
        values[ind][e.target.name] = e.target.value
        setInputFields(values)
        // console.log(values)
    }


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // console.log(inputFields)
    //     setList([...list, inputFields])
    // }

    // console.log(list)

    const handleAddFeild = () => {
        setInputFields([...inputFields, { id: Math.random(), todo: '' }])

    }

    const handleDeleteFeild = (id) => {
        // console.log("delete", id)

        const update = inputFields.filter((elem) => {
            console.log("update", elem.id, id.id)
            return elem.id !== id.id
        })
        setInputFields(update)

    }

    // console.log(inputFields)


    const Get = async () => {

        const response = await fetch("http://localhost:4000/db")
        // console.log(response)
        const result = await response.json();

        setList(result.Todo)
        // console.log("Todo",result.Todo)

    }

    useEffect(() => {
        Get();
    }, [])

    const post = () => {
        let data = inputFields
        // const data = Object.assign({}, inputFields);

        let res = fetch("http://localhost:4000/Todo", {
            method: "Post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        alert('Added Succesfully')
        Get();
        console.log(data)
    }


    return (
        <div className='question3' >

            <h1>Question 3 </h1>

            {inputFields && inputFields.map((inputField, ind) => {
                // console.log(ind)
                // console.log(inputField)
                return (
                    <div key={ind}>

                        <input type='text' name='todo' values={inputField.todo} placeholder='Add Todos' onChange={e => { handleChange(e, ind) }} />

                        <button onClick={(e) => { handleDeleteFeild(inputField) }}>-</button>

                        <button onClick={handleAddFeild}>+</button>

                    </div>
                )
            })}
            {/* <button onClick={handleSubmit}>send</button> */}
            <button onClick={post}>send</button>



            <h1>MAP</h1>

            {list && list.map((elem, ind) => {
                // console.log(elem)
                const data = Object.assign([], elem);
                console.log(data)


                return (
                    <div key={ind}>

                        {data.map((ele, ind) => {
                            console.log(ele)
                            return (
                                <ul key={ind}>
                                    <li>{ele.todo}</li>
                                </ul>
                            )
                        })}

                    </div>
                )
            })}




        </div>
    )
}

export default Question3






