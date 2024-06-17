package com.cricinfo.CricInfo.repository;

import com.cricinfo.CricInfo.model.Match;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MatchRepository extends JpaRepository<Match ,Integer> {

    Optional <Match> findByTeamHeading (String teamHeading);
}
