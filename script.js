function calculateProjectAchievement() {
    const projects = parseInt(document.getElementById('projects').value);
    const targetProjects = parseInt(document.getElementById('targetProjects').value);
    const percentage = (projects / targetProjects) * 100;
    document.getElementById('projectPercentage').textContent = `Project Achievement: ${percentage.toFixed(2)}%`;
}

function calculateRevenueAchievement() {
    const revenue = parseFloat(document.getElementById('revenue').value);
    const targetRevenue = parseFloat(document.getElementById('targetRevenue').value);
    const percentage = (revenue / targetRevenue) * 100;
    document.getElementById('revenuePercentage').textContent = `Revenue Achievement: ${percentage.toFixed(2)}%`;
}
function calculatePercentage(achieved, target) {
  if (isNaN(achieved) || isNaN(target) || target === 0) {
    return 'Invalid input';
  }

  const percentage = (achieved / target) * 100;
  return percentage.toFixed(2) + '%';
}

// Example usage:
const projectsPercentage = calculatePercentage(projectsFound, projectsTarget);
projectsPercentageOutput.textContent = projectsPercentage;
