import todoModel from "./todoModel";

const todoView=(todoModel)=>
{
    const render=()=>
    {
        const {id,title,completed}=todoModel;
        let $title=completed?`<del class="w-75 text-truncate">${title}</del>`:`<span class="text-truncate w-75">${title}</span>`;


        return `<li class="list-group-item" data-id=${id}>
        
        <input type="checkbox" class="toggleCompleted mr-2" ${completed?"checked":""}>
        <button type="button" class="remove close mr-2 text-danger"><span>x</span></button
        ${$title}
        
        
        
        </li>`
    }
    return {
        render
    }
}

export default todoView;