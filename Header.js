import React,{useState} from 'react'

const Header = () => {
    const [message, setMessage] = useState("")
    const handleChange = event => {
        setMessage(event.target.value);

        console.log('value is:', event.target.value);
    };
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light position-fixed w-100" style={{ zIndex: 100 }}>
                <div class="container-fluid">
                    <a class="navbar-brand " href="#">FindForMe</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className=''>list name</li>
                        </ul>
                        <form class="d-flex">
                            <input type="text" id="message" name="message" onChange={handleChange} value={message} class="form-control me-2" />
                            {/* <input class="form-control me-2" value={message} onChange={() => { serachValue }} type="search" placeholder="Search" aria-label="Search" /> */}
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
    </div>
  )
}

export default Header
