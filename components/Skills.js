const Skills = ({ skillsets }) => {
  return (
    <>
      <div>
        {skillsets.map((skill) => (
          <div className='flex-row inline-flex ml-2 italic border tracking-wide m-1 p-2 pl-4 pr-4 rounded-lg bg-blue-300 text-gray-700 shadow-md'>
            {skill}
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
