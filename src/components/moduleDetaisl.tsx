const trybeModules = {
  module1: 'Fundamentos',
  module2: 'Front-End',
  module3: 'Back-End',
  module4: 'Ciencia da Computação',
};

function ModuleDetails() {
  return (
    <div>
      <p>{ trybeModules.module1 }</p>
      <p>{ trybeModules.module2 }</p>
      <p>{ trybeModules.module3 }</p>
      <p>{ trybeModules.module4 }</p>
    </div>

  );
}

export default ModuleDetails;
