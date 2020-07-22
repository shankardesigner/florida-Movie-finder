import React from 'react'

function Model() {
    return (
        <>
          <div className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                <div className="modal-header">
                <h4 className="modal-title" id="mySmallModalLabel">Small modal</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
                </button>
            </div>
                </div>
            </div>
            </div>  
        </>
    )
}

export default Model
