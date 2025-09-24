import { Input, Space } from "antd";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInputText, applySearch } from "../../redux/slices/searchSlice";

const { Search } = Input;

export const SearchUserInput = memo(() => {
  const dispatch = useDispatch();
  const inputText = useSelector((state) => state.search.inputText);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(applySearch());
  };

  const handleSearchClick = () => {
    dispatch(applySearch());
  };

  return (
    <form onSubmit={handleSubmit}>
      <Space style={{ width: "40%" }} direction="vertical">
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="middle"
          value={inputText}
          onChange={(e) => dispatch(setInputText(e.target.value.trim()))}
          onSearch={handleSearchClick}
        />
      </Space>
    </form>
  );
});
