import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import GithubPage from './pages/GithubPage'
import Template from './pages/_TemplatePage'
import GitHubRepos from './pages/GithubPage'
import HomePage from './pages/HomePage'


function App() {

  return (
    <Routes>
      <Route path='/' element={<Template />}>
        <Route index element={<HomePage />} />
      <Route path='/repos' element={<GitHubRepos />} />
      </Route>
    </Routes>
  )
}

export default App
