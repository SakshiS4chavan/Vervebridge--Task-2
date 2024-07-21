package in.sp.main.repositories;


import org.springframework.data.jpa.repository.JpaRepository;

import in.sp.main.model.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {
}
