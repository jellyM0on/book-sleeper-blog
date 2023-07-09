import React from 'react'
import AddWorksForm from '../components/cmsadd-form'
import CMSWorksList from '../components/cmsworks-works';
import EditWorkForm from '../components/cmsedit-form';
import { useState } from 'react';
import { useWorksContext } from "../hooks/useWorksContext";


export default function CmsPage({data, form}){
    const {works} = useWorksContext()
    const [selected, setSelected] = useState(0); 

    return(
        <div className='cms-page'>
            <h2>CONTENT MANAGER</h2>
            <div className='cms-content'>
                <CMSWorksList setSelected={setSelected} data={data}/>
                {form ? <EditWorkForm work={form} setSelected={setSelected} /> : <AddWorksForm/>}
            </div>
        </div>
    )
}