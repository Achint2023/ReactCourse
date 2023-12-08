import ProjectSidebar from "./components/projectSidebar";
import logo from './assets/no-projects.png'

function App() {
  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Project Management System</h1>
      <main className="h-screen my-8 flex gap-8">

        <ProjectSidebar className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl"/>
      </main>
      <div>
        {/*  Np project selected */}
        <img src={logo} className="w-16 h-16 object-contain mx-auto" />
        <h2>No project selected</h2>

        <h4>Select a project or get started with a new one</h4>

        <button 
        className="px-4 py-2 text-xs md:text-base rounded-md 
        bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        >Create new Project</button>

      </div>
    </>
  );
}

export default App;
