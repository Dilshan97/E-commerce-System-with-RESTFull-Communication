package com.dilshan.ecommerce.services.implementation;

import com.dilshan.ecommerce.services.ItemService;
import com.dilshan.ecommerce.models.ItemDTO;
import com.dilshan.ecommerce.repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemServiceImpl implements ItemService {

    @Autowired
    private ItemRepository itemRepository;

    @Override
    public List<ItemDTO> allItems() {
        List<ItemDTO> allStock = itemRepository.findAll();
        return allStock;
    }

    @Override
    public String saveItem(ItemDTO itemData) {
       itemRepository.save(itemData);
        return "Item added";
    }

    @Override
    public String updateItem(Integer id, ItemDTO itemData) {

        String msg = null;

        if (itemRepository.findById(id) != null){
            itemRepository.save(itemData);
            msg = "Item Updated";
        }
        else {
            msg = "Can't update Item";
        }
        return msg;
    }

    @Override
    public Optional<ItemDTO> searchItem(Integer id) {
        return itemRepository.findById(id);
    }

    @Override
    public String deleteItem(Integer id) {
        itemRepository.deleteById(id);
        return "Item Deleted";
    }
}
