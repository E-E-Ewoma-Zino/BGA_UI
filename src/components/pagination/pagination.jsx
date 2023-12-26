import React from 'react'

export default function Pagination() {
  return (
    <>
        <div className="card">
            <div className="card-inner">
            <div className="nk-block-between-md g-3">
                <div className="g">
                <ul className="pagination justify-content-center justify-content-md-start">
                    <li className="page-item">
                    <a className="page-link" href="#x">
                        Prev
                    </a>
                    </li>
                    <li className="page-item">
                    <a className="page-link" href="#x">
                        1
                    </a>
                    </li>
                    <li className="page-item">
                    <a className="page-link" href="#x">
                        2
                    </a>
                    </li>
                    <li className="page-item">
                    <span className="page-link">
                        <em className="icon ni ni-more-h" />
                    </span>
                    </li>
                    <li className="page-item">
                    <a className="page-link" href="#x">
                        6
                    </a>
                    </li>
                    <li className="page-item">
                    <a className="page-link" href="#x">
                        7
                    </a>
                    </li>
                    <li className="page-item">
                    <a className="page-link" href="#x">
                        Next
                    </a>
                    </li>
                </ul>
                {/* .pagination */}
                </div>
                <div className="g">
                <div className="pagination-goto d-flex justify-content-center justify-content-md-start gx-3">
                    <div>Page</div>
                    <div>
                    <select
                        className="form-select js-select2 select2-hidden-accessible"
                        data-search="on"
                        data-dropdown="xs center"
                        data-select2-id={1}
                        tabIndex={-1}
                        aria-hidden="true"
                    >
                        <option value="page-1" data-select2-id={3}>
                        1
                        </option>
                        <option value="page-2">2</option>
                        <option value="page-4">4</option>
                        <option value="page-5">5</option>
                        <option value="page-6">6</option>
                        <option value="page-7">7</option>
                        <option value="page-8">8</option>
                        <option value="page-9">9</option>
                        <option value="page-10">10</option>
                        <option value="page-11">11</option>
                        <option value="page-12">12</option>
                        <option value="page-13">13</option>
                        <option value="page-14">14</option>
                        <option value="page-15">15</option>
                        <option value="page-16">16</option>
                        <option value="page-17">17</option>
                        <option value="page-18">18</option>
                        <option value="page-19">19</option>
                        <option value="page-20">20</option>
                    </select>
                    <span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id={2}
                        style={{ width: "82.4px" }}
                    >
                        <span className="selection">
                        <span
                            className="select2-selection select2-selection--single"
                        >
                            <span
                            className="select2-selection__rendered"
                            id="select2-nhza-container"
                            >
                            1
                            </span>
                            <span
                            className="select2-selection__arrow"
                            role="presentation"
                            >
                            <b role="presentation" />
                            </span>
                        </span>
                        </span>
                        <span
                        className="dropdown-wrapper"
                        aria-hidden="true"
                        />
                    </span>
                    </div>
                    <div>OF 102</div>
                </div>
                </div>
                {/* .pagination-goto */}
            </div>
            {/* .nk-block-between */}
            </div>
            {/* .card-inner */}
        </div>
    </>
  )
}
