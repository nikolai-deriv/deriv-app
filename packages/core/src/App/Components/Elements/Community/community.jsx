import React from 'react';
import { Popover, Icon } from '@deriv/components';
import { localize } from '@deriv/translations';

const Community = () => {
    return (
        <React.Fragment>
            <div
                onClick={() => {
                    let modal = document.getElementById('modal-community');
                    const toggleModal = () => {
                        modal.style.display === 'none'
                            ? (modal.style.display = 'block')
                            : (modal.style.display = 'none');
                    };

                    if (document.getElementById('modal-community')) return toggleModal();

                    modal = document.createElement('div');
                    modal.id = 'modal-community';

                    modal.style.position = 'absolute';
                    modal.style.right = '72px';
                    modal.style.bottom = '72px';
                    modal.style.width = '250px';
                    modal.style.height = '500px';
                    modal.style.zIndex = '9999';
                    modal.style.borderRadius = '8px';
                    modal.style.backgroundColor = 'white';
                    modal.style.boxShadow = '-5px 5px 50px grey';
                    modal.style.padding = '16px';
                    modal.style.overflow = 'scroll';

                    const close_btn = document.createElement('div');
                    close_btn.innerHTML =
                        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="dc-icon" height="16" width="16" style="position: absolute;" ><use xlink:href="/public/images/sprite/common.svg#ic-cross"></use></svg>';
                    close_btn.style.position = 'relative';
                    close_btn.style.direction = 'rtl';
                    close_btn.style.cursor = 'pointer';
                    close_btn.onclick = toggleModal;

                    const header_text = document.createElement('div');
                    header_text.innerText = 'Our community discussions may be helpful:';
                    header_text.style.fontSize = '20px';
                    header_text.style.color = '#ff444f';

                    modal.append(close_btn);
                    modal.append(header_text);
                    document.body.append(modal);

                    fetch('https://community.deriv.com/c/dbot/14.json')
                        .then(res => res.json())
                        .then(res =>
                            res.topic_list.topics.forEach((topic, index) => {
                                if (index === 0) return;

                                const topicElement = document.createElement('div');

                                topicElement.style.fontSize = '14px';
                                topicElement.style.padding = '10px 0';
                                topicElement.style.cursor = 'pointer';
                                topicElement.onmouseenter = () => (topicElement.style.textDecoration = 'underline');
                                topicElement.onmouseleave = () => (topicElement.style.textDecoration = 'none');
                                topicElement.onclick = async () => {
                                    const postsContainer = document.createElement('div');
                                    const discussion = await fetch(
                                        `https://community.deriv.com/t/topic/${topic.id}.json`
                                    ).then(res => res.json());
                                    const posts = discussion.post_stream.posts;

                                    posts.forEach(post => {
                                        const postElement = document.createElement('div');

                                        const avatarURL = post.avatar_template.includes('https')
                                            ? post.avatar_template.replace('{size}', 16)
                                            : 'https://community.deriv.com' +
                                              post.avatar_template.replace('{size}', 16);
                                        postElement.innerHTML =
                                            `<div style='font-weight: bold; padding: 4px 0;'>` +
                                            `<div style='display: flex; align-items: center'><img style='margin-right: 4px' src='${avatarURL}'/>${post.username}</div></div>` +
                                            post.cooked;
                                        postsContainer.append(postElement);
                                    });

                                    postsContainer.style.padding = '4px';
                                    postsContainer.style.fontSize = '10px';

                                    topicElement.after(postsContainer);
                                };

                                topicElement.innerHTML = `${index}. ${topic.title}`;
                                modal.append(topicElement);
                            })
                        );
                }}
            >
                <Popover
                    className='footer__link'
                    classNameBubble='help-centre__tooltip'
                    alignment='top'
                    message={localize('Community')}
                >
                    <Icon icon='IcChat' className='dc-icon footer__icon' />
                </Popover>
            </div>
        </React.Fragment>
    );
};

export default Community;
