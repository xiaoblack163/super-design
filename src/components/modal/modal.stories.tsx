import React, { useState } from 'react'
import { Modal } from './index'
import Button from '../button'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

export default {
    title: '组件/Modal',
    component: Modal,
    decorators: [withKnobs],
}

function KnobsModal() {
    const [state, setState] = useState(false);
    const title = text("title", "标题");
    const child = text("children", "sdsdsssda");
    const confirm = boolean("confirm", true);
    const okText = text("okText", "确认");
    const cancelText = text("cancelText", "Cancel");
    return (
        <div>
            <Modal
                refCallback={action("refCallback")}
                stopScroll={boolean("stopScroll", true)}
                delay={number("delay", 200)}
                closeButton={boolean("closeButton", true)}
                mask={boolean("mask", true)}
                maskClose={boolean("maskClose", true)}
                callback={action("callback")}
                cancelText={cancelText}
                okText={okText}
                confirm={confirm}
                title={title}
                parentSetState={setState}
                visible={state}
            >
                {child}
            </Modal>
            <Button onClick={() => setState(!state)}>toggle</Button>
        </div>
    );
}

export const knobsModal = () => <KnobsModal></KnobsModal>;