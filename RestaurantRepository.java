package in.sp.main.repositories;


import org.springframework.data.jpa.repository.JpaRepository;

import in.sp.main.model.Restaurant;

public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {
}
