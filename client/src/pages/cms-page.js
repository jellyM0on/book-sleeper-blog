import React from 'react'
import AddWorksForm from '../components/cmsadd-form'
import CMSWorksList from '../components/cmsworks-works';
import EditWorkForm from '../components/cmsedit-form';
import { useState, useEffect } from 'react';
import { useWorksContext } from "../hooks/useWorksContext";
import { useLocation } from 'react-router-dom';



export default function CmsPage({data, form}){
    const {works} = useWorksContext()
    const [selected, setSelected] = useState(0); 

    return(
        <div className='cms-page'>
            <h3>Content Manager</h3>
            <div>
                <CMSWorksList setSelected={setSelected} data={data}/>
                {form ? <EditWorkForm work={form} setSelected={setSelected} /> : <AddWorksForm/>}
            </div>
        </div>
    )
}