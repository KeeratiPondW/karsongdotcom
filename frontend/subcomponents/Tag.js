import { useState, useRef } from "react"
import { Tag, Input, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const MyTag = () => {
    const [tags, setTags] = useState(['Unremovable', 'Tag 2', 'Tag 3'])
    const [inputVisible, setInputVisible] = useState(false)
    const [inputValue, setInputValue] = useState("")
    const [editInputIndex, setEditInputIndex] = useState(-1)
    const [editInputValue, setEditInputValue] = useState("")

    const saveInputRef = useRef(null)
    const saveEditInputRef = useRef(null)

    console.log(tags)

    const handleClose = (removedTag) => {
        const newTags = tags.filter(tag => tag !== removedTag);
        console.log(newTags);
        setTags(newTags)
    };

    const showInput = () => {
        setInputVisible(true)
        // saveInputRef.current.focus()
        // this.setState({ inputVisible: true }, () => this.input.focus());
    };

    const handleInputChange = e => {
        setInputValue(e.target.value)
    };

    const handleInputConfirm = () => {
        if (inputValue && tags.indexOf(inputValue) === -1) {
            setTags([...tags, inputValue])
        }
        setInputVisible(false)
        setInputValue("")
    };

    const handleEditInputChange = e => {
        setEditInputValue(e.target.value)
    };

    const handleEditInputConfirm = () => {
        const newTags = [...tags]
        newTags[editInputIndex] = editInputValue
        setTags(newTags)
        setEditInputIndex(-1)
        setEditInputValue("")
    };

    // const saveInputRef = input => {
    //     // this.input = input;
    //     input.current = input
    // };

    // const saveEditInputRef = input => {
    //     // this.editInput = input;
    //     editInput.current = input
    // };

    return (
        <div>
            {tags.map((tag, index) => {
                if (editInputIndex === index) {
                    return (
                        <Input
                            ref={saveEditInputRef}
                            key={tag}
                            size="small"
                            className="tag-input"
                            value={editInputValue}
                            onChange={handleEditInputChange}
                            onBlur={handleEditInputConfirm}
                            onPressEnter={handleEditInputConfirm}
                        />
                    );
                }

                const isLongTag = tag.length > 20;

                const tagElem = (
                    <Tag
                        style={editTag}
                        color="#2db7f5"
                        key={tag}
                        closable={index !== 0}
                        onClose={() => handleClose(tag)}
                    >
                        <span
                            onDoubleClick={e => {
                                if (index !== 0) {
                                    setEditInputIndex(index)
                                    setEditInputValue(tag)
                                    this.setState({ editInputIndex: index, editInputValue: tag }, () => {
                                        this.editInput.focus();
                                    });
                                    e.preventDefault();
                                }
                            }}
                        >
                            {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                        </span>
                    </Tag>
                );
                return isLongTag ? (
                    <Tooltip title={tag} key={tag}>
                        {tagElem}
                    </Tooltip>
                ) : (
                    tagElem
                );
            })}
            {inputVisible && (
                <Input
                    ref={saveInputRef}
                    type="text"
                    size="small"
                    style={tagInput}
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputConfirm}
                    onPressEnter={handleInputConfirm}
                />
            )}
            {!inputVisible && (
                <Tag color="#108ee9" onClick={showInput}>
                    <PlusOutlined /> New Tag
                </Tag>
            )}
        </div>
    )
}

const editTag = {
    userSelect: "none"
}

const tagInput = {
    width: "100px",
    marginRight: "8px",
    verticalAlign: "top"
}

export default MyTag

