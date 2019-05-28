package com.dilshan.ecommerce.controllers;

import com.dilshan.ecommerce.models.ItemDTO;
import com.dilshan.ecommerce.services.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/item")
public class Item {

    @Autowired
    private ItemService itemService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/all")
    public List<ItemDTO> allStock(){
        return itemService.allItems();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/add")
    public String addItem(@RequestBody ItemDTO itemData){
        return itemService.saveItem(itemData);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/update/{id}")
    public String updateItem(@PathVariable Integer id, @RequestBody ItemDTO itemData){
        return itemService.updateItem(id, itemData);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/find/{id}")
    public Optional<ItemDTO> searchItem(@PathVariable Integer id){
        return itemService.searchItem(id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/delete/{id}")
    public String deleteItem(@PathVariable Integer id){
        return itemService.deleteItem(id);
    }

}
