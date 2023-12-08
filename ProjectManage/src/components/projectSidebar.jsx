
export default function ProjectSidebar(props) {
    return (
        <aside className={props.className}>
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <button className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800">+ Add Project</button>
            <ul></ul>
        </aside>
    );
}