import React from 'react'

export const PostCard = props => {
    if (!props.item)
        return;
    const {
        title,
        content,
    } = props.item;
    return (
        <div className="post-card">
            <div className="card m-0">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{content}</p>
                </div>
            </div>
        </div>
    )
}
