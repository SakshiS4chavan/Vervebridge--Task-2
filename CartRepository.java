package in.sp.main.repositories;


import org.springframework.data.jpa.repository.JpaRepository;

import in.sp.main.model.Cart;

public interface CartRepository extends JpaRepository<Cart, Long> {
}

