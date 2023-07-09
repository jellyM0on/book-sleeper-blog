import AddWorksForm from '../components/cmsadd-form'
import CMSWorksList from '../components/cmsworks-works';
import EditWorkForm from '../components/cmsedit-form';


export default function CmsPage({form}){

    return(
        <div className='cms-page'>
            <h2>CONTENT MANAGER</h2>
            <div className='cms-content'>
                <CMSWorksList/>
                {form ? <EditWorkForm work={form}/> : <AddWorksForm/>}
            </div>
        </div>
    )
}