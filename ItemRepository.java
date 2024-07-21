package in.sp.main.repositories;


import org.springframework.data.jpa.repository.JpaRepository;

import in.sp.main.model.Item;

public interface ItemRepository extends JpaRepository<Item, Long> {
}
