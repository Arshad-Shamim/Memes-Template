import React from 'react'

export default function Error({error,setError}) {
  return (
    <>
    <div className='bg-danger container-fluid' style={{minHeight:"100vh"}}>
        <div className='float-end'>
        {(error)!="page Not Founded"?
        <button type="button" class="btn-close" aria-label="Close" onClick={()=>{setError("")}}></button>:""
        }
        </div>
        <div className='container-fluid  pt-4'>
            <div className="container  text-center mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
                </svg>
            </div>
        </div>

        <div className='container-fluid mt-4'>
            <div className='container mt-4 fs-1 text-center'>
                {error}
            </div>
        </div>
    </div>
    </>
  )
}
