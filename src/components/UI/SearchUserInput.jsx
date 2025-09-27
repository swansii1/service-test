import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setInputText, applySearch } from "../../redux/slices/searchSlice";

const { Search } = Input;

export const SearchUserInput = () => {
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
    <form onSubmit={handleSubmit} className="w-full flex justify-center">
      <div className="w-full sm:w-2/3 md:w-1/2 lg:w-2/5">
        <Search
          placeholder="Введите пользователя..."
          allowClear
          enterButton="Поиск"
          size="middle"
          value={inputText}
          onChange={(e) => dispatch(setInputText(e.target.value.trim()))}
          onSearch={handleSearchClick}
          className="w-full"
        />
      </div>
    </form>
  );
};
