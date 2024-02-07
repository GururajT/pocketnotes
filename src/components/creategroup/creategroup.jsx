import React, { useEffect, useState, useRef } from 'react'
import { colors } from '../colors/color'
import style from './creategroup.module.css'
import { useModal } from './groupcontext';

function Creategroup(props){
    const [groupName, setGroupName] = useState('');
    const [selectedColorIndex,setSelectedColorIndex]=useState();
    const [selectedColor, setSelectedColor] = useState(null);
    const [createdGroups, setCreatedGroups] = useState([]);
    const [Modal , setModal]= useState(true);
    const modalRef = useRef(null);


    useEffect(() => {
        const storedGroups = JSON.parse(localStorage.getItem("createdGroups"))
        if (storedGroups) {
            setCreatedGroups(storedGroups)
        }
    }, [])
    const handleChange=(e)=>{
        setGroupName(e.target.value)
    }
    const handleColor=(idx)=>{
        setSelectedColor(colors[idx])
        setSelectedColorIndex(idx);
    }
    const handleCreate=()=>{
        if (groupName && selectedColor){
            const isIdentical=createdGroups.some(group => group.text===groupName)
            if(!isIdentical){
                const newGroup={
                    id: createdGroups.length,
                    text:groupName,
                    color:selectedColor,
                    notes:[]
                }

                const updatedGroups=[...createdGroups,newGroup]
                localStorage.setItem("createdGroups", JSON.stringify(updatedGroups))
                props.updateGroups(updatedGroups)
                setGroupName("")
                setSelectedColor(null)
                setModal(false)
                alert("Group Created Successfully")
            }
            else{
                alert("Group Name already Exists!")
            }
        }
        else{
            alert('Please Enter Group Name and Select Color !!')
        }
    }
    useEffect(() => {
        const handleClickOutsideModal = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setModal(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutsideModal);

        return () => {
            document.removeEventListener('mousedown', handleClickOutsideModal);
        };
    }, [setModal]);
    return(
        <>
        <div className={style.main} id="modal" ref={modalRef} style={{ display: Modal ? 'flex' : 'none' }}>
            <div className={style.inputcontent}>
                <h1>Create New Group</h1>
                <div className={style.text}>
                    <label >Group Name <input maxLength={20} onChange={(e) => handleChange(e)} type="text" name="group" placeholder='Enter Group Name' /></label>
                </div>
                <div className={style.colors}>
                    <h1>Choose Color</h1>
                    {colors.map((color, index) => (
                        <div key={index} className={style.color}>
                            <p style={{
                                background: `${color}`,
                                border: selectedColorIndex === index ? '2px solid black' : 'none'
                            }} onClick={() => handleColor(index)}></p>
                        </div>
                    ))}

                </div>
            </div>
            <div className={style.btn}>
                <button onClick={handleCreate}>Create</button>
            </div>
        </div>
        </>
    )
}
export default Creategroup;