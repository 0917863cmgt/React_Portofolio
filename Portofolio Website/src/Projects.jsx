import './Projects.css'

function Projects() {
    project = <div id='project-container'>
    <button></button>
    <img id='project-image' src='{project_image}'/>
    <button></button>
    <h2>{project_title}</h2>
    <p>{project_body}</p>
</div>;
    return (
        <>
            <h2>Projects</h2>
            {project}
        </>
    )
}

export default Projects