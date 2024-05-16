import React from 'react';

import CustomButton from './CustomButton';

const AIPicker = ({ prompt, setPrompt, generatingImg, handlerSubmit }) => {
  return (
    <div className = "aipicker-container">
      <textarea
       placeholder = "AI Generation..."
       rows = {5}
       value = {prompt}
       onChange={(e) => setPrompt(e.target.value)} 
       className = "aipicker-textarea"  
      />

      <div className = "flex flex-wrap gap-3">
        { generatingImg ? (
          <CustomButton
           type = "outline"
           title = "Asking AI..."
           customStyles = "text-xs"
          />
        ) : (
          <>
            <CustomButton  
             type = "outline"
             title = "AI Logo"
             handleClick = {() => handlerSubmit('logo')}
             customStyles = "text-xs"
            />

            <CustomButton  
             type = "filled"
             title = "AI Full"
             handleClick = {() => handlerSubmit('full')}
             customStyles = "text-xs"
            />
          </>
        )}
      </div>

    </div>
  )
}

export default AIPicker