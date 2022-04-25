import {useState} from `react`;
import './App.scss';
import _jobs from `./data/data.json`;

_jobs.forEach((job)=> {
  job.status=`accepted`
});

function App() {
	return <div className="App">Hello!</div>;
}

export default App;
