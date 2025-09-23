import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/const/api";

export const updateUser = createAsyncThunk(
  "patch/updateUser",
  async ({ id, userData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message,
      );
    }
  },
);

const patchSlice = createSlice({
  name: "patch",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearUsers: (state) => {
      state.data = [];
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    }, 
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        const updatedUser = action.payload;
        const index = state.data.findIndex((u) => u.id === updatedUser.id);

        if (index !== -1) {
          state.data[index] = updatedUser;
        } else {
          state.data.push(updatedUser);
        }
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Неизвестная ошибка";
      });
  },
});

export const { clearUsers, clearError } = patchSlice.actions;
export default patchSlice.reducer;
