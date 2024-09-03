import React from 'react'
        import "./index.css"


        const Courses = (props) => {
            const { each } = props
            const { total, text, color } = each
            const colorText = {
                color: `${color}`
            }
            return (
                <div className='d-flex flex-column align-items-center shadow course-container'>
                    <p className='fs-2' style={colorText}>{total} </p>
                    <p>{text} </p>
                </div>
            )
        }

        export default Courses
