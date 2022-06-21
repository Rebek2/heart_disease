

import { useState } from "react";
import React from 'react';
import './styl.css'


function Formularz(){

    const [respons,setRespons] = useState('')
    const [HighBP,setHighBP] = useState('0')
    const [HighChol, setHighChol] = useState('0')
    const [Stroke,setStroke] = useState('0')
    const [GenHlth,setGenHlth] = useState('0')
    const [PhysHlth,setPhysHlth] = useState('0')
    const [DiffWalk,setDiffWalk] = useState('0')
    const [Sex,setSex] = useState('0')
    const [Age,setAge] = useState('1')
    const [ispending,setIsPending] = useState(false)
    const [dod,setDod] = useState(true)


    
    const handleSubmit = async(e) => {
        e.preventDefault();
        const data={HighBP,HighChol,Stroke,GenHlth,PhysHlth,DiffWalk,Sex,Age}
        console.log(data)
        setIsPending(true)
        const result =await fetch('http://127.0.0.1:8000/forest', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
        }).catch((error) =>{
        setIsPending(false)
    })

    const newComment= await result.json()
    setRespons(newComment)
    
    }


    return(
        <div>
        <div >  
             <center>
                 
            
      
            {!ispending && 
            <div id = 'bounce2' class = 'bounce circle'>
                <form>
                <h2 class = 'semi'>Sprawdź ryzyko wystąpienia chorób serca</h2>
                <div>
                <label >Czy masz wysoki puls?</label>
                <select value = {HighBP} onChange = {(e)=>setHighBP(e.target.value)}>
                <option value="0">Nie</option>
                <option value='1'>Tak</option>
                </select>
                </div>
                 
                <div>
               
                <label>Czy masz wysoki cholesterol?</label>
                <select value = {HighChol} onChange = {(e)=>setHighChol(e.target.value)}>
                <option value="0">Nie</option>
                <option value='1'>Tak</option>
                </select>
                </div>

                <div>
                <label>Czy miałeś udar?</label>
                <select value = {Stroke} onChange = {(e)=>setStroke(e.target.value)}>
                <option value="0">Nie</option>
                <option value='1'>Tak</option>
                </select>
                </div>

                <div>
                <label>Jak oceniasz swoje zdrowie?</label>
                <select value = {GenHlth} onChange = {(e)=>setGenHlth(e.target.value)}>
                <option value='1'>Wyśmienite</option>
                <option value='2'>Bardzo dobre</option>
                <option value='3'>Dobre</option>
                <option value='4'>Takie sobie</option>
                <option value='5'>Słabo</option>
                </select>
                </div>


                <div>
                <label>Czy masz powazne problemy z chodzeniem lub wchodzeniem po schodach?</label>
                <select value = {DiffWalk} onChange = {(e)=>setDiffWalk(e.target.value)}>
                <option value="0">Nie</option>
                <option value='1'>Tak</option>
                </select>
                </div>

                <div>
                <label>Jaka jest twoja płeć?</label>
                <select value = {Sex} onChange = {(e)=>setSex(e.target.value)}>
                <option value='0'>Mężczyzna</option>
                <option value='1'>Kobieta</option>
                </select>
                </div>





                <div>
                <label>Jaki jest twój wiek?</label>
                <select value = {Age} placeholder ='Wybierz..' onChange = {(e)=>setAge(e.target.value)}>
                <option value='1'>18-24</option>
                <option value='2'>25-29</option>
                <option value='3'>30-34</option>
                <option value='4'>35-39</option>
                <option value='5'>40-44</option>
                <option value='6'>45-49</option>
                <option value='7'>50-54</option>
                <option value='8'>55-59</option>
                <option value='9'>60-64</option>
                <option value='10'>65-69</option>
                <option value='11'>70-74</option>
                <option value='12'>75-79</option>
                <option value='13'>80 lub starszy</option>
                </select>
                </div>

                <div>
                <label> Przez ile z ostatnich 30 dni twoje zdrowie fizyczne nie było dobre (urazy,bóle) </label>
                <input type="number" min="0" max="30" onChange ={(e)=>setPhysHlth(e.target.value)} >
                </input>
                </div>


                <center>
                    <h2></h2>
                 <button class="button-86" role="button" onClick= {handleSubmit}   type ='submit' >Sprawdź..</button>
               
                
                </center>
                
                </form>
                <h2></h2>
            </div>}
                

                <div>
                   
                    {ispending && 
                    <div id ='bounce1' class = 'bounce rectangle'>
                        <h2>{respons.response}</h2>
                        <h2>Prawdowodobieństwo wystąpienia chorób serca wynosi: {respons.probab}% </h2>
                        
                        </div>}
                </div>
                </center>
        </div>  
        
        </div>

    )
    }
export default Formularz;