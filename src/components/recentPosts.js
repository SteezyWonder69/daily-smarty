import React, { Component } from 'react';

export default class RecentPosts extends Component {
    render() {
        return (
            <div className='recent-posts'>
                <div className='recent-posts__wrapper'>
                    <div className='recent-posts__heading'>
                        Recent Posts
                    </div>
                    <ul className='recent-posts__posts'>
                        <li>recent post</li>
                        <li>recent post</li>
                        <li>recent post</li>

                    </ul>
                </div>

            </div>
        );
    };
};