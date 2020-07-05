import React from 'react';
import PropTypes from 'prop-types';
import Repo from '../images/repo.svg';

const GitHubCard = props => {
    if (!props.item)
        return null;
    const {
        name,
        description,
        homepageUrl,
        forkCount,
        createdAt,
        updatedAt,
        resourcePath,
        languages,
        stargazers,
        totalCount,
    } = props.item;
    return (
        <div className="card m-0">
            <div className="card-body">
                <h5 className="card-title"><img width={16} height={20} src={Repo} alt='repo' />{' '}<a href={`https://github.com${resourcePath}`}>{name}</a></h5>
                <p className="card-text">{description}</p>

            </div>
            <div class="card-footer">
                <span className='github-lang-icon' style={{ backgroundColor: `${languages.edges[0].node.color}` }} />
                <span className="pl-1">{languages.edges[0].node.name}</span>
            </div>
        </div>
    );
};

GitHubCard.propTypes = {

};

export default GitHubCard;