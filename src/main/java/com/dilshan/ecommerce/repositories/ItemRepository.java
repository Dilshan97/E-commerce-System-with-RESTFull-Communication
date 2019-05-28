package com.dilshan.ecommerce.repositories;

import com.dilshan.ecommerce.models.ItemDTO;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<ItemDTO, Integer> {

}
