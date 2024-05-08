package com.example.productcategory;

import com.example.productcategory.Entity.Category;
import com.example.productcategory.Repository.CategoryRepository;
import com.example.productcategory.Service.CategoryService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.hamcrest.Matchers;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentMatchers;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

import java.util.ArrayList;
import java.util.List;

@RunWith(SpringRunner.class)
@WebMvcTest
public class CategoryControllerTest {
    @Autowired
    private MockMvc mvc;

    @MockBean
    private CategoryService categoryService;

    @MockBean
    private CategoryRepository categoryRepository;

    private static ObjectMapper mapper = new ObjectMapper();

    @Test
    public void testGetCategory() throws Exception {
        Category category = new Category();
        category.setCategoryId(5);
        category.setCategoryName("Phone");
        category.setCategoryPic("https://cellbuddy.in/wp-content/uploads/2020/12/Apple-12-Mini-Smartphones-491901548-i-1-1200Wx1200H.jpg");
        category.setCategoryDesc("Iphone");

        List<Category> allCategory = new ArrayList<>();
        allCategory.add(category);

        Mockito.when(categoryService.allCategory()).thenReturn(allCategory);

        System.out.println("test method");
        mvc.perform(get("/category/allCategory").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk())
                .andExpect(jsonPath("$", Matchers.hasSize(1)))
                .andExpect(jsonPath("$[0].categoryName", Matchers.equalTo(category.getCategoryName())));
    }

    @Test
    public void testSaveCategory() throws Exception {
        Category category = new Category();
        category.setCategoryId(1);
        category.setCategoryName("Electronics");
        category.setCategoryPic("https://www.bigbasket.com/media/uploads/p/l/237467-8_1-moov-pain-relief-cream.jpg");
        category.setCategoryDesc("nice product");
        Mockito.when(categoryService.createCategory(ArgumentMatchers.any())).thenReturn(category);
        String json = mapper.writeValueAsString(category);
        mvc.perform(post("/category/addCategory").contentType(MediaType.APPLICATION_JSON).characterEncoding("utf-8")
                .content(json).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk());

    }
}
