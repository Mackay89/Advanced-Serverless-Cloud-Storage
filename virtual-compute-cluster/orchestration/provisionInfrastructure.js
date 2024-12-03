const { exec } = require('child_process');

// Custom IaC tool for provisioning
const provisionResources = (configFile) => {
  const command = `terraform apply -var-file=${configFile} -auto-approve`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error('Provisioning failed:', error);
      return;
    }
    console.log('Provisioning completed:', stdout);
  });
};

module.exports = { provisionResources };

