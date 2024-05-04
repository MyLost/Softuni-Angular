package npd21.softuni.backend.service.impl;

import npd21.softuni.backend.repository.UserRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    public UserDetailsServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        var userEntity = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        if(userEntity == null) {
            throw new RuntimeException("User not found!");
        }

        return new UserDetails() {

            @Override
            public Collection<? extends GrantedAuthority> getAuthorities() {
                return userEntity.getAuthorities();
            }

            @Override
            public String getPassword() {
                return userEntity.getPassword();
            }

            @Override
            public String getUsername() {
                return userEntity.getUsername();
            }

            @Override
            public boolean isAccountNonExpired() {
                return userEntity.isAccountNonExpired();
            }

            @Override
            public boolean isAccountNonLocked() {
                return userEntity.isAccountNonLocked();
            }

            @Override
            public boolean isCredentialsNonExpired() {
                return userEntity.isCredentialsNonExpired();
            }

            @Override
            public boolean isEnabled() {
                return userEntity.isEnabled();
            }
        };
    }
}