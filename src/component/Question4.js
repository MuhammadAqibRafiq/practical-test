import React, { useState , useEffect} from 'react'
import './question4.css'



const Question4 = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setemail] = useState('')
    const [num, setNum] = useState('')

    const [form, setForm] = useState([])
    const [userId, setUserId] = useState(null)
    const [toggleSubmit, setToggleSubmit] = useState(true);

    const Get = async () => {

    const response = await fetch("http://localhost:4000/db")
    // console.log(response)
    const result = await response.json();

    setForm(result.Form)
    console.log("Form",result.Form)

    }

    useEffect(() => {
    Get();
    }, [])

    const Post = () => {
    let data ={id:Math.random(), firstName, lastName, email, num }

    let res = fetch("http://localhost:4000/Form", {
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


    const DeleteUser = (id) => {
    alert('you want to delete ?')
    fetch(`http://localhost:4000/Form/${id}`, {
        method: 'DELETE'
    })
    Get();
    }

    const Update = () => {
    alert("You want to update?")
    let data ={ firstName, lastName, email, num }
    fetch(`http://localhost:4000/Form/${userId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    Get()
    setToggleSubmit(true);
    }


    const Edit = (elem) => {
    console.log(elem)

    const {id,firstName,lastName,email,num} = elem

    setFirstName(firstName);
    setLastName(lastName)
    setemail(email)
    setNum(num)
    setUserId(id)
    setToggleSubmit(false);
    
    }

    // console.log(userId)
    // console.log(form)

    return (
        <div className='question4__main'>

            <div className='question4'>

                <h1>FORM</h1>
                <div className='question4__input'>
                    <input value={firstName} placeholder='Name' onChange={(e) => { setFirstName(e.target.value) }} type='text' />
                    <input value={lastName} placeholder='Last Name' onChange={(e) => { setLastName(e.target.value) }} type='text' />
                    <input value={email} placeholder='email' onChange={(e) => { setemail(e.target.value) }} type='email' />
                    <input value={num} placeholder='phone number' onChange={(e) => { setNum(e.target.value) }} type='number' />
                </div>

                {
                     toggleSubmit ? <div className='btn'> <button onClick={Post}>SAVE</button></div> 
                    :
                                    <div className='btn'> <button onClick={Update}>Update</button></div>
                        }



            </div>

            <div className='question4__table'>

                <h1>SUBMITTED FORM</h1>
                <table >
                    <tbody>
                    <tr id='tr'>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email Adress</th>
                    <th>Phone #</th>
                    <th>BUTTON</th>
                </tr>

                    {form && form.map((elem, ind) => {
                        // console.log(elem)
                        return (

                            <tr key={ind}>
                                <td>{elem.firstName}</td>
                                <td>{elem.lastName}</td>
                                <td>{elem.email}</td>
                                <td>{elem.num}</td>
                                <td><button onClick={() => { Edit(elem) }}>Edit</button></td>
                                <td><button onClick={() => { DeleteUser(elem.id) }}>delete</button></td>
                            </tr>

                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Question4













// withoutAPi Practice //


// import React, { useState } from 'react'
// import './question4.css'
// const Question4 = () => {

//     const [firstName, setFirstName] = useState('')
//     const [lastName, setLastName] = useState('')
//     const [email, setemail] = useState('')
//     const [num, setNum] = useState('')

//     const [toggleSubmit, setToggleSubmit] = useState(true);
//     const [isEditItem, setIsEditItem] = useState(null);

//     const [form, setForm] = useState([])

  

// const submit = () => {
//     const data = { firstName, lastName, email, num }
//     console.log(data)
//     setForm([...form, data])

//     setFirstName("");
//     setLastName("")
//     setemail("")
//     setNum("")

// }

// const edit = (elem) => {
//     console.log(elem)

//     const {firstName,lastName,email,num} = elem

//     setFirstName(firstName);
//     setLastName(lastName)
//     setemail(email)
//     setNum(num)



// }

// const update = (ind) => {
//     console.log(ind)


// }

//     // console.log(form)

//     return (
//         <div className='question4__main'>

//             <div className='question4'>

//                 <h1>FORM</h1>
//                 <div className='question4__input'>
//                     <input value={firstName} placeholder='Name' onChange={(e) => { setFirstName(e.target.value) }} type='text' />
//                     <input value={lastName} placeholder='Last Name' onChange={(e) => { setLastName(e.target.value) }} type='text' />
//                     <input value={email} placeholder='email' onChange={(e) => { setemail(e.target.value) }} type='email' />
//                     <input value={num} placeholder='phone number' onChange={(e) => { setNum(e.target.value) }} type='number' />
//                 </div>
//                 {/* {
//                             toggleSubmit ? <button onClick={submit}>SAVE</button> :
//                             <button onClick={edit}>Update</button>
//                         } */}
//                 <div className='btn'> <button onClick={submit}>SAVE</button></div>
//                 <div className='btn'> <button onClick={update}>Update</button></div>


//                 {/* <div className='btn'> <button onClick={submit}>SAVE</button></div> */}



//             </div>

//             <div className='question4__table'>

//                 <h1>SUBMITTED FORM</h1>
//                 <table >

//                     <th>First Name</th>
//                     <th>Last Name</th>
//                     <th>Email Adress</th>
//                     <th>Phone #</th>
//                     <th>BUTTON</th>


//                     {form && form.map((elem, ind) => {
//                         // console.log(elem)
//                         return (

//                             <tr key={ind}>
//                                 <th>{elem.firstName}</th>
//                                 <th>{elem.lastName}</th>
//                                 <th>{elem.email}</th>
//                                 <th>{elem.num}</th>
//                                 <th><button onClick={() => { edit(elem) }}>Edit</button></th>
//                                 <th><button onClick={() => { update(ind) }}>update</button></th>

//                             </tr>

//                         )
//                     })}

//                 </table>
//             </div>
//         </div>
//     )
// }

// export default Question4



