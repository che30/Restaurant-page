import bodyInfo from './bodyinfo';
import navbar from './Nav';

const bodyContain = () => {
  const root = document.getElementById('content');
  root.appendChild(navbar());
  root.appendChild(bodyInfo());
};
export default bodyContain;