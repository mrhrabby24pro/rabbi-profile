
import React from 'react';

interface ProjectsProps {
  data: any[];
  editMode: boolean;
  onUpdate: (data: any[]) => void;
}

const Projects: React.FC<ProjectsProps> = ({ data, editMode, onUpdate }) => {
  const handleEdit = (index: number, field: string, value: string) => {
    const newProjects = [...data];
    newProjects[index] = { ...newProjects[index], [field]: value };
    onUpdate(newProjects);
  };

  const addProject = () => {
    onUpdate([...data, { title: "নতুন প্রজেক্ট", description: "বর্ণনা যোগ করুন", tags: ["Tag"] }]);
  };

  const removeProject = (index: number) => {
    if (confirm("আপনি কি নিশ্চিত এই প্রজেক্টটি ডিলিট করতে চান?")) {
      onUpdate(data.filter((_, i) => i !== index));
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-2xl font-bold border-l-4 border-blue-600 pl-4">প্রজেক্টসমূহ</h3>
          {editMode && (
            <button 
              onClick={addProject}
              className="px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              + নতুন প্রজেক্ট
            </button>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col relative group">
              {editMode ? (
                <div className="space-y-3 bg-yellow-50/50 p-2 rounded-lg">
                  <input 
                    value={project.title}
                    onChange={(e) => handleEdit(index, 'title', e.target.value)}
                    className="w-full font-bold p-1 border rounded"
                  />
                  <textarea 
                    value={project.description}
                    onChange={(e) => handleEdit(index, 'description', e.target.value)}
                    className="w-full text-sm p-1 border rounded"
                    rows={3}
                  />
                  <button 
                    onClick={() => removeProject(index)}
                    className="text-xs text-red-500 font-bold hover:underline"
                  >
                    ডিলিট প্রজেক্ট
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-4 text-blue-500 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag: string, tIndex: number) => (
                      <span key={tIndex} className="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] rounded-full uppercase font-bold border border-gray-200">{tag}</span>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
